function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}

sayHello();

function sayHello_ES6() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  // console.log(i); // 'i' is not defined.
}

sayHello_ES6();

const x = 1;
// x = 2; // Attempting to override 'x' which is a constant.

const person = {
  name: "User 1",
  walk() {
    console.log(this);
  },
  talk() {}
};

person.name = "User 3";
person["name"] = "User 2";

const targetMember = "name";
person[targetMember] = "User 2";
console.log(person[targetMember]);

person.talk();
person.walk();

const walk = person.walk;
console.log(walk);
walk();

const walk2 = person.walk.bind(person);
console.log(walk2);
walk2();

const square = function(number) {
  return number * number;
};

const square2 = number => {
  return number * number;
};

const square3 = number => number * number;
console.log(square3(5));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: true },
  { id: 4, isActive: true },
  { id: 5, isActive: false }
];

var activeJobs = jobs.filter(function(job) {
  return job.isActive;
});

var activeJobs2 = jobs.filter(job => job.isActive);
console.log(activeJobs2);

const user = {
  name: "User 1",
  talk() {
    setTimeout(function() {
      console.log(this);
    }, 1000);
  }
};
user.talk();

const user2 = {
  name: "User 2",
  talk() {
    var self = this;
    setTimeout(function() {
      console.log(self);
    }, 1000);
  }
};
user2.talk();

const user3 = {
  name: "User 3",
  talk() {
    setTimeout(() => console.log(this), 1000);
  }
};
user3.talk();
