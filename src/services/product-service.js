export class ProductService {
  productRepository = [
    {
      "id": 1,
      "name": "item 1",
      "icon": "beer",
      "description": "My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?",
      "subTitle": " "
    },
    {
      "id": 2,
      "name": "item 2",
      "icon": "ghost",
      "description": "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.",
    },
    {
      "id": 3,
      "name": "Item 3",
      "icon": "cookie",
      "description": "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.",
    },
    {
      "id": 4,
      "name": "Item 4",
      "icon": "jedi",
      "description": "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
    }
  ]


  getProduct = function (productId) {
    return this.productRepository.find((element) => { return element.id === productId });
  }

  getAllProducts = function () {
    return this.productRepository
  }
}
