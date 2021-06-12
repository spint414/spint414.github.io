import math

# Viết hàm print_fibonacci(n), in ra n số trong dãy fibonacci. Mặc định số thứ nhất và 2 là 0 1
def print_fibonacci(n):
    n1, n2 = 0, 1
    count = 2
    numbers = "0 1"

    if n <= 0:
        print("hãy nhập số nguyên dương")
    elif n == 1:
        print(n1)
    else:
        while count < n:
            n3 = n1 + n2
            n1 = n2
            n2 = n3
            count += 1
            numbers += " " + str(n3)
        print(numbers)

print_fibonacci(10)

# Viết hàm is_leap_year(year) kiểm tra xem một năm có phải năm nhuận hay không, kết quả trả về là True hoặc False, lưu ý về các trường hợp của năm nhuận
def is_leap_year(year):
    if (year % 4) == 0:
        if (year % 100) == 0:
            if (year % 400) == 0:
                print(f"{year} là năm nhuận")
            else:
                print(f"{year} không phải là năm nhuận")
        else:
            print(f"{year} là năm nhuận")
    else:
        print(f"{year} không phải là năm nhuận")

is_leap_year(2000)

# Viết hàm tìm nghiệm phương trình bậc 2 ax^2 + bx + c = 0, hàm nhận 3 tham số a, b, c, in ra nghiệm phương trình, lưu ý điều kiện phương trình
def quad_equation():
    a = float(input('a: '))
    b = float(input('b: '))
    c = float(input('c: '))

    d = (b**2) - (4*a*c)

    if d < 0:
        print("Không có kết quả")
    elif d == 0:
        x = (-b + math.sqrt(d)) / (2 * a)
        print("Có một kết quả: ", x)
    else:
        x1 = (-b + math.sqrt(d)) / (2 * a)
        x2 = (-b - math.sqrt(d)) / (2 * a)
        print("Có 2 kết quả: ", x1, "và", x2)

quad_equation()

# Viết hàm kiểm tra một số có phải số nguyên tố hay không, kết quả trả về True hoặc False
def is_prime_number(n):
    if n > 1:
        for i in range(2, n):
            if n % i ==  0:
                print("Không phải só nguyên tố")
                break
        else:
            print("Là số nguyên tố")
    else:
         print("Không phải só nguyên tố")

is_prime_number(7)

