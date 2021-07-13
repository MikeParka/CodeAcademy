// Enter your first name and surname in the variables below:

const firstName = 'Mike';
const secondName = 'Parka';

function introduceYourself(firstName, secondName) {
    const fullName = firstName + ' ' + secondName;
    return console.log('My full name is: ' + fullName);
};


introduceYourself(firstName, secondName);

// List your friends in the array below:

let friends = ['Bart', 'David', 'Ola'];

// Say hi to all of them!

for (let i = 0; i < friends.length; i++) {
    console.log('Hi ' + friends[i] + '!');
}

// Call a random friend

const randomFriend = friends[Math.floor(Math.random() * friends.length)];
console.log('Random friend this time is... ' + randomFriend);

// Now, let's practice creating objects and methods

const book = {
    name: 'Witches Abroad',
    author: 'Terry Pratchet',
    pages: 350,
    readPages: 180,

    remainingPages() {
        return this.pages - this.readPages;
    }
};

const stillToRead = book.remainingPages();
const currentlyReading = book.name + ' by ' + book.author + '. I have ' + stillToRead + ' pages left to read.';
console.log(currentlyReading);