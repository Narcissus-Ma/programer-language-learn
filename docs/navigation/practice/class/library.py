# title: 简单图书馆管理系统
# 实现一个简单的图书馆管理系统。该系统允许用户添加书籍、删除书籍、查找书籍以及显示所有书籍。我们将使用字典来存储书籍信息，其中键是书籍的 ISBN 号，值是书籍的详细信息（如书名、作者等）。

class Library:
    def __init__(self):
        self.books = {}
    
    def add_book(self, isbn, title, author):
        if isbn not in self.books:
            self.books[isbn] = {'title': title, 'author': author}
            print(f"Book {title} by {author} with ISBN {isbn} added.")
        else:
            print(f"Book with ISBN {isbn} already exists.")

    def remove_book(self, isbn):
        if isbn in self.books:
            del self.books[isbn]
            print(f"Book with ISBN {isbn} removed.")
        else:
            print(f"Book with ISBN {isbn} not found.")

    def find_book(self, isbn):
        if isbn in self.books:
            book_info = self.books[isbn]
            print(f"Book found: {book_info['title']} by {book_info['author']} with ISBN {isbn}")
        else:
            print(f"Book with ISBN {isbn} not found.")

    def display_all_books(self):
        if self.books:
            for isbn, book_info in self.books.items():
                print(f"ISBN: {isbn}, Title: {book_info['title']}, Author: {book_info['author']}")
        else:
            print("No books in the library.")