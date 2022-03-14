export class AnimalMock {
  constructor(){}
  getData() {
    return [
      {
        kind: 'Tiger',
        sound: 'Grrrr',
        energy: 3,
        description: ' Nunc sed ipsum et ipsum hendrerit lobortis et vel nisl.',
        picture: 'https://us.123rf.com/450wm/cundrawan703/cundrawan7031704/cundrawan703170400021/75806547-stock-vector-tiger-wild-animal-vector-good-use-for-symbol-logo-web-icon-mascot-sign-or-any-design-you-want-.jpg?ver=6'
      },
      {
        kind: 'Monkey',
        sound: 'OOoooooOOOoooOoOo',
        energy: 4,
        description: 'Duis placerat, metus vitae blandit congue, nisi magna molestie orci, ut venenatis ligula mi id nibh. Proin eget eros lectus. ',
        picture: 'https://i.pinimg.com/originals/5c/f2/2b/5cf22bbfc2c83937dd5ba9df701167f4.gif'
      }
    ]
  }
}