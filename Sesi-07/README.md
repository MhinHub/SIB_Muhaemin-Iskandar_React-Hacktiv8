# Sesi 7: React Component Lifecycle, Fetch Data, dan Study Case

## Component Lifecycle
## Dalam Class Component
    Pada dasarnya, Lifecycle ( siklus hidup ) adalah urutan kejadian atau keadaan yang terjadi secara default dan berjalan secara teratur. Lifecycle pada React, berarti urutan kejadian atau keadaan yang terjadi ketika kita mengimplementasikan sebuah komponen React. Lifecycle terdiri dari 3 bagian, yaitu:
    1. Mounting
    2. Updating
    3. Unmounting

### Mounting
    Mounting adalah proses ketika sebuah komponen React pertama kali di-render atau ditampilkan ke dalam DOM. Terdiri dari:
    1. constructor() => proses inisialisasi state dan binding method
    2. render() => harus ada. bersifat pure function, tidak boleh melakukan perubah state
    3. componentDidMount() => akan dijalankan setelah render pertama kali dijalankan. biasanya digunakan untuk melakukan fetch data

### Updating
    Updating adalah proses ketika sebuah komponen React di-update atau di-render ulang. Terdiri dari:
    - shouldComponentUpdate(nextProps, nextState) => Default behaviour dari React adalah selalu re-render setiap ada perubahan state atau props. Dengan function ini, kita bisa membatasi, keadaan / kejadian apa saja yang bisa men-trigger re-render. Default return value dari function ini adalah true.
    - componentDidUpdate (prevProps, prevState) => Method yang satu ini akan dipanggil tepat setelah render dipanggil. Kita bisa gunakan untuk operasi DOM atau request async untuk data berikutnya disini. Prefetch misalnya

### Unmounting
    Unmounting adalah proses ketika sebuah komponen React di-unmount atau dihilangkan dari DOM. Terdiri dari:
    - componentWillUnmount() => Akan dipanggil sebelum kita menghapus komponen dari DOM. Biasanya digunakan untuk melakukan cleanup seperti menghapus event listener, timer, dan lain-lain.

### Error Handling
    Error Handling adalah proses ketika terjadi error pada sebuah komponen React. Terdiri dari:
    - componentDidCatch(error, info) => Method ini akan dipanggil ketika terjadi error pada komponen. Kita bisa gunakan untuk melakukan logging error, atau menampilkan error message ke user.

## Dalam Functional Component
    Effect Hook, useEffect, menambahkan kemampuan untuk melakukan “efek samping” dari sebuah function component. Hook ini memiliki fungsi yang sama dengan componentDidMount, componentDidUpdate, dan componentWillUnmount pada kelas React, tetapi disatukan menjadi satu API

## Fetch Data
### Class Component
    memanfaatkan componentDidMount() untuk melakukan data fetching dan mengisinya kepada local state
### Functional Component
    memanfaatkan useEffect() untuk melakukan data fetching dan mengisinya kepada local state





