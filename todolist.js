const todoList = {
    items: [
        {
            text: 'Завершить текущий челлендж',
            completed: false,
        },
        {
            text: 'Отдохнуть во время перерыва',
            completed: false,
        },
        {
            text: 'Помочь напарнику понять код',
            completed: false,
        },
        {
            text: 'Выиграть в мафию',
            completed: true,
        },
    ],
    printAll: function () {
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.print(i))
        }
    },



    remove: function (xxx) {
        let i = xxx
        this.items.splice(i, xxx)
    },

    print: function (index) {
        if (this.items[index].completed == false) {
            console.log(`[] ${this.items[index].text}`)
        } else {
            console.log(`[x] ${this.items[index].text}`)
        }
    },

    add: function (newCase) {
        this.items.unshift({ text: newCase, completed: false })
        console.log(this.printAll())
    },


    complete: function (index) {
        if (this.items[index].completed == false) {
            this.items[index].completed = true
        } else if (this.items[index].completed == true) {
            console.log(`Дело сделанно гуляй Вася `)
        }
    }
};


