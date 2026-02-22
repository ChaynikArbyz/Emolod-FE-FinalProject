import type {Book} from "../types/Book.ts";
import type {Category} from "../types/Category.ts";
import type {Author} from "../types/Author.ts";
import type {CartItem, User} from "../types/User.ts";

export type BookWithAuthor = Book & { authorName: string | null };

export function saveToLocalStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving to localStorage", error);
  }
}
export function getFromLocalStorage<T>(key: string):T | null 
{
  try {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value) as T;
    }
  } catch (error) {
    console.error("Error getting from localStorage", error);
  }
  return null;
}

export function removeFromLocalStorage(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing from localStorage", error);
  }
}
export function getCategories(): Category[] | null
{
  return getFromLocalStorage<Category[]>("categories") 
}

export function getBooks(): Book[] | null
{
  return getFromLocalStorage<Book[]>("books") 
}

export function getAuthors(): Author[] | null
{
  return getFromLocalStorage<Author[]>("authors") 
}

export function getAuthorById(authorId: number): string | null {
  const authors = getFromLocalStorage<Author[]>("authors");
  if (authors) {
    const author = authors.find((a) => a.id === authorId);
    return author ? author.name : null;
  }
  return null;
}

export function getBooksWithAuthor(): BookWithAuthor[] | null {
  const books = getBooks();
  const authors = getAuthors();

    if (books && authors) {
        return books.map(book => {
            const author = authors.find(a => a.id === book.authorId);
            return {
                ...book,
                authorName: author ? author.name : null
            };
        });
    }
    return null;
}

export function saveUser(user: User){
    const users = getFromLocalStorage<User[]>('users') || [];
    users.push(user);

    saveToLocalStorage<User[]>('users', users);
}

export function saveCurrentUserToken(token: string){
    saveToLocalStorage('currentUserToken', token);
}

export function loginUser(email: string, password: string): boolean {
  const users = getFromLocalStorage<User[]>('users');
  if (users) {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      saveCurrentUserToken(user.token);
      return true;
    }
  }
  return false;
}

export function checkToken(): boolean {
    const savedToken = getFromLocalStorage<string>('currentUserToken');
    const users = getFromLocalStorage<User[]>('users');

    if (!savedToken || !users) return false;

    return users.some(user => user.token === savedToken);
}

export function getCurrentUserToken(): string | null {
  return getFromLocalStorage<string>('currentUserToken');
}

export function getCurrentUser(): User | null {
  const token = getCurrentUserToken();
  const users = getFromLocalStorage<User[]>('users') || [];
  if (!token) return null;
  return users.find(u => u.token === token) || null;
}

export function getCartForCurrentUser(): CartItem[] {
  const currentUser = getCurrentUser();
  if (currentUser) {
    if (!currentUser.cart) {
      currentUser.cart = [];
    }
    return (currentUser.cart as CartItem[]) || [];
  }
  return getFromLocalStorage<CartItem[]>('guestCart') || [];
}

export function saveCartForCurrentUser(cart: CartItem[]): void {
  const token = getCurrentUserToken();
  if (!token) {
    saveToLocalStorage<CartItem[]>('guestCart', cart);
    return;
  }

  const users = getFromLocalStorage<User[]>('users') || [];
  const idx = users.findIndex(u => u.token === token);
  if (idx === -1) {
    saveToLocalStorage<CartItem[]>('guestCart', cart);
    return;
  }

  if (!users[idx].cart) {
    users[idx].cart = [];
  }
  users[idx].cart = cart;
  saveToLocalStorage<User[]>('users', users);
}

export function clearCartForCurrentUser(): void {
  saveCartForCurrentUser([]);
}

export function saveTotalCountForCurrentUser(totalCount: number): void {
  const token = getCurrentUserToken();
  if (!token) {
    return;
  }

  const users = getFromLocalStorage<User[]>('users') || [];
  const idx = users.findIndex(u => u.token === token);
  if (idx === -1) {
    return;
  }

  users[idx].totalCount = totalCount;
  saveToLocalStorage<User[]>('users', users);
}