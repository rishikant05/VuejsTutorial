Vue.component('hello', {
    template: '<h1>hello!</h1>'
});

var vm1 = new Vue({
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function() {
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            });
            if(this.checkWin()) {
                return;
            }
            this.mosterAttack();
            // this.playerHealth -= this.calculateDamage(5, 12);
            // this.checkWin();
         },
        specialAttack: function() {
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster hard for ' + damage,
            });
            if(this.checkWin()) {
                return;
            }
            this.mosterAttack();
         },
        heal: function() {
            vm2.title= 'ewrwerewrwe';
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.mosterAttack();
            this.$refs.changeHealButton.innerText = 'New Heal';
            console.log(this.$refs.changeHealButton);
        },
        giveUp: function() {
            this.gameIsRunning = false;
        },
        mosterAttack: function() {
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for' + damage,
            });
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function() {
            if( this.monsterHealth <= 0  ) {
                if(confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if(confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});

vm1.$mount('#app');
var vm2 = new Vue({
    'el': '#app2',
    data: {
        title: 'hello app 2',
    }
});

// var vm3 = new Vue({
//     template: '<h1>Hello11!</h1>',
// });
// vm3.$mount('#app3');
// document.getElementById('app3').appendChild(vm3.$el);
setTimeout(() => {
    vm2.title = 'title changed!';
}, 3000);


new Vue({
    el: '#app-5',
    data: {
        title: 'The VueJs Instance'
    },
    beforeCreate: function() {
        console.log('beforeCreate()');
    },
    created: function() {
        console.log('created()');
    },
    beforeMount: function() {
        console.log('beforeMount()');
    },
    beforeUpdate: function() {
        console.log('beforeUpdate()');
    },
    updated: function() {
        console.log('updated()');
    },
    beforeDestroy: function() {
        console.log('beforeDestroy()');
    },
    destroyed: function() {
        console.log('destroyed()');
    },
    methods: {
        destroy: function() {
            this.$destroy();
        }
    }              
});

var data= {status: 'critical'};
Vue.Component('my-comp', {
    data: function() {
        return data;
    },
    template: '<p>Server status: {{status}}</p>'
});

var vm6 = new Vue({
    'el': '#app6',
    data: {
        title: 'hello app 2',
    }
});
