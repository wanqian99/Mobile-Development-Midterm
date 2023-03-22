import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

let gelatoMenu = {
  items: [
    { "title":"Gelato",
      "contents":[
                    {"title":"Vanilla", "calories": "207", "price": "5",
                     "image": require('./assets/vanilla-gelato.png'),
                     "description": "A perfect treat, with a creamy, dense texture and intense vanilla flavor. \n\nOur vanilla bean gelato has been lovingly crafted with only a handful of premium ingredients. We started with coconut milk, and cane sugar, then added in Madagascar vanilla beans, and real vanilla extract for an elevated exotic flavor like no other."},

                    {"title":"Coffee Mocha Chips", "calories": "235", "price": "7",
                      "image": require('./assets/coffee-chocolate-chips-gelato.png'),
                      "description": "As you slam dunk your spoon through crunchy chocolate chips to celebrate the epic coffee core. \n\nOur Coffee Chocolate Chips gelato is both creamy and crunchy. That’s because we created a smooth frozen gelato made from carefully selected premium ingredients, with chocolate chips  and chocolate syrup, indulgent treat you can feel good about."},

                    {"title":"Banana Split", "calories": "226", "price": "7",
                      "image": require('./assets/banana-split-gelato.png'),
                      "description": "Vanilla flavored gelato swirled with ribbons of strawberry-banana and fudge revels, loaded with chocolate, and cherries. \n\n Vanilla gelato blended with strawberries, fresh strawberries and bananas, a brûléed banana and a maraschino cherry."}
                  ]
    }]
};

let cafeMenu = {
  items: [
    { "title":"Coffee",
      "contents":[
                    {"title":"Flat White", "calories": "170", "price": "8",
                      "image": require('./assets/flat-white.jpg'),
                      "description": "Smooth ristretto shots of espresso get the perfect amount of steamed whole milk to create a not-too-strong, not-too-creamy, just-right flavor. \n\n13g sugar, 9g fat"},

                    {"title":"Latte", "calories": "190", "price": "11",
                      "image": require('./assets/latte.jpeg'),
                      "description": "Our dark, rich espresso balanced with steamed milk and a light layer of foam. A perfect milk-forward warm-up. \n\n18g sugar, 7g fat"},

                    {"title":"Caffè Americano", "calories": "15", "price": "10",
                      "image": require('./assets/americano.jpeg'),
                      "description": "Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance. \n\n0g sugar, 0g fat"}
                  ]
    }]
};

let pizzaMenu = {
  items: [
    { "title":"Pizza", "contents":[
                          {"title":"Smoked Salmon & Avocado", "calories": "810", "price": "21",
                            "image": require('./assets/Smoked-Salmon-and-Avocado-Pizza.jpeg'),
                            "description": "Smoked Salmon and Avocado Pizza with a herb cream cheese base and peppery arugula leaves."},

                          {"title":"Garlic Butter Pull Bread", "calories": "1235", "price": "28",
                            "image": require('./assets/Garlic-Butter.jpeg'),
                            "description": "This garlic butter pizza pull apart bread is smothered in garlic butter, stuffed with pizza fillings, and topped with so.much.cheese!"},

                          {"title":"Margarita chicken breasts", "calories": "910", "price": "23",
                            "image": require('./assets/margarita-pizza-stuffed-chicken-breasts.jpeg'),
                            "description": "Stuffing boneless and skinless chicken breasts with all of the typical pizza toppings transforms plain old chicken into a beautiful low carb pizza!"}
                        ]
    },
    { "title":"Pasta", "contents":[
                          {"title":"Parmesan Carbonara", "calories": "574", "price": "18",
                            "image": require('./assets/carbonara.jpeg'),
                            "description": "Creamy Parmesan Carbonara Chicken is the ultimate twist! Crispy, Golden Chicken fillets soak up a carbonara inspired sauce."},

                          {"title":"Turkey Cannelloni", "calories": "549", "price": "22",
                            "image": require('./assets/cannelloni.jpeg'),
                            "description": "A healthy and filling cannelloni stuffed with beautifully flavoured turkey, so smooth with the sweet potato and good-for-you Kale, baked in a rich and rustic sauce, and topped with a home made creamy béchamel sauce."},

                          {"title":"Bolognese", "calories": "540", "price": "18",
                            "image": require('./assets/bolognese.jpg'),
                            "description": "A bowl of steaming hot pasta tangled with a beautifully rich and smooth bolognese sauce exploding with so much flavour you’ll be dipping and licking the sauce directly from the wooden spoon before it hits the pasta!"}
                        ]
    }
  ]
};

let barMenu = {
  items: [
    { "title":"Champagne", "contents":[
                          {"title":"Moet & Chandon", "calories": "95", "price": "110",
                            "image": require('./assets/moet.jpeg'),
                            "description": "Lively and generous Nectar Impérial distinguishes itself by its extravagant fruitiness, its density on the palate and its crisp finish that instantly surprise and delight. Nectar Rosés assemblage is built on the intensity of Pinot Noir, the fruitiness of Pinot Meunier, and the freshness of Chardonnay. \n\nIdeal for all sweet and sour, fatty-spicy, sugary-spicy or sweet dishes, Nectar Rosé offers amazing pairings with foie gras marinated in red wines and red fruits based desserts."},

                          {"title":"Dom Perignon Rose", "calories": "106", "price": "310",
                            "image": require('./assets/dom-perignon.jpeg'),
                            "description": "The bouquet is mesmerizing, ripe, and complex. The opening notes are a blend of dark spices and cocoa which develop very quickly into fruit aromas. Fruit reigns supreme, with roasted fig and apricot and candied orange. The overall effect exudes smoky accents. \n\nOn the palate, the fullness of the wine is immediately striking. Its intensity and succulence set the tone through the sweetness and crisp punch of the flavors. The silky mouthfeel melts into a smooth, tight, and grainy structure with just a hint of vegetable flavors. The wine expresses an appealing brininess and saline character."}
                        ]
    },
    { "title":"Tequila", "contents":[
                          {"title":"Don Julio", "calories": "70", "price": "250",
                            "image": require('./assets/don-julio.jpeg'),
                            "description": "Warm oak, vanilla and roasted agave flavors lead into a lingering oak and rich vanilla finish for a luxurious tequila recognized by connoisseurs around the globe. Aged in small batches for 2 and a half years, this añejo tequila is made with 100% Blue Weber Agave that is ready for any celebration."}
                        ]
    },
    { "title":"Whiskey Bourbon", "contents":[
                          {"title":"Woodford Reserve", "calories": "250", "price": "225",
                            "image": require('./assets/woodford-reserve.jpeg'),
                            "description": "Clean, brilliant honey amber in color, this whiskey is heavy with rich dried fruit, as well as hints of mint and oranges covered with a dusting of cocoa and faint vanilla and tobacco spice. \n\nIt is rich, chewy, rounded and smooth on the palate, with complex citrus, cinnamon and cocoa. Silky smooth, almost creamy on the finish."},

                          {"title":"Angel's Envy", "calories": "239", "price": "250",
                            "image": require('./assets/angels-envy.jpeg'),
                            "description": "A gold color laced with reddish amber hues, nearly copper in tone. On the nose, you'll detect notes of subtle vanilla, raisins, maple syrup and toasted nuts. \n\nThe palate reveals vanilla, ripe fruit, maple syrup, toast and bitter chocolate, culminating in a clean finish and lingering sweetness with a hint of Madeira that slowly fades."},

                          {"title":"Heaven's Door Double Barrel", "calories": "250", "price": "275",
                            "image": require('./assets/heavens-door.jpeg'),
                            "description": "Comprised of a unique blend of three different whiskeys, Heaven's Door using a double barrel finishing process and utilizes hand-toasted, new American oak barrels for a secondary aging worthy of another years wait. \n\nDouble Barrels higher proof balances perfectly with the complexity of its flavor and notes of caramel, oak, citrus, and spice. Strong flavors of dried fruit, heartland-toasted grains and oats, with a finish of persimmon, mulberry and fennel. Bold and complex with a lasting caramel finish. "}
                        ]
    }
  ]
};

const HomescreenCell = (props) => (
  <Cell {...props}
    contentContainerStyle={styles.restaurantCell}
    backgroundColor='transparent'
    highlightUnderlayColor='#ccc'
    cellContentView={
      <View style={styles.cellContainer}>
        <Image style={styles.imageContainer} source={props.imgUri} resizeMode="cover"/>
        <Text style={styles.titleText}>{props.title}</Text>
        <Text style={styles.taglineText}>{props.tagline}</Text>
        <View style={styles.etaContainer}>
          <Text style={styles.etaText}>{props.eta} {"\n"}mins</Text>
        </View>
      </View>
    }
    onPress={props.action}
  />
)

const MenuCell = (props) => (
  <Cell {...props}
    accessory="DisclosureIndicator"
    cellContentView={
      <View style={styles.menuContainer}>
        <Text style={styles.menuTitle}>{props.title}</Text>
        <Text style={styles.menuCalories}>Calories: {props.calories}</Text>
        <View style={styles.menuPriceContainer}>
          <Text style={styles.menuPrice}>${props.price} USD</Text>
        </View>
      </View>
    }
    onPress={props.action}
  />
)

const DetailsCell = (props) => (
  <Cell {...props}
    backgroundColor='transparent'
    highlightUnderlayColor='#ccc'
    cellContentView={
      <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>{props.title}</Text>
          <Image style={styles.detailsImage} source={props.detailsImage} resizeMode="cover"/>
          <View style={styles.contentContainer}>
            <Text style={styles.detailsCalorie}>Calories: {props.calories}</Text>
            <Text style={styles.detailsDescription}>{props.description}</Text>
          </View>
      </View>
    }
  />
)

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <TableView>
          <Section name="" hideSeparator="true" separatorTintColor="#ccc">
            <HomescreenCell title = "Joe's Gelato" tagline="Desert, Ice cream, £££"
                            eta="10-30"
                            imgUri={require('./assets/ice-cream-header.jpeg')} action={()=>navigation.navigate("Menu", gelatoMenu)}
            />
          </Section>
          <Section name="" hideSeparator="true" separatorTintColor="#ccc">
            <HomescreenCell title = "Joe's Cafè" tagline="Coffee, £££"
                            eta="5-10"
                            imgUri={require('./assets/cafe-header.jpeg')} action={()=>navigation.navigate("Menu", cafeMenu)}
            />
          </Section>
          <Section name="" hideSeparator="true" separatorTintColor="#ccc">
            <HomescreenCell title = "Joe's Diner" tagline="Italian, Pizza, ££"
                            eta="25+"
                            imgUri={require('./assets/pizza-header.jpeg')} action={()=>navigation.navigate("Menu", pizzaMenu)}
            />
          </Section>
          <Section name="" hideSeparator="true" separatorTintColor="#ccc">
            <HomescreenCell title = "Joe's Bar" tagline="Bar, Alcoholic, £££££"
                            eta="5-12"
                            imgUri={require('./assets/wine-bar.jpeg')} action={()=>navigation.navigate("Menu", barMenu)}
            />
          </Section>
        </TableView>
      </ScrollView>
    </SafeAreaView>
  )
}

function MenuScreen({navigation, route}) {
  const {items} = route.params;
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <TableView>
          {items.map((section, i) => (
            <Section header={section.title} key={i}>
              {section.contents.map((content ,i) => (
                <MenuCell title = {content.title}
                          calories = {content.calories}
                          price = {content.price}
                          key = {i}
                          action={()=>navigation.navigate("Details", {paramKey: content})}/>
              ))}
            </Section>
          ))}
        </TableView>
      </ScrollView>
    </SafeAreaView>
  )
}

function DetailsScreen({route}) {
  const items = route.params.paramKey;
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <TableView>
            <Section>
              <DetailsCell title = {items.title}
                           detailsImage = {items.image}
                           calories = {items.calories}
                           description = {items.description}/>
            </Section>
        </TableView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {backgroundColor: 'lightskyblue'},
        headerTitleStyle: {fontWeight: 'bold', fontSize: 26, color: 'aliceblue'}
      }}>
        <Stack.Screen
          name="Restaurants" component={HomeScreen}/>
        <Stack.Screen name="Menu" component={MenuScreen}/>
        <Stack.Screen name="Details" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  restaurantCell: {
    flex: 1,
    height: 290,
    marginTop: 10,
    marginBottom: 10,
  },
  cellContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'lightskyblue',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 8,

  },
  taglineText: {
    fontSize: 15,
    color: 'grey',
    marginBottom: 5,
  },
  etaContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    borderWidth: 5,
    borderColor: 'lightskyblue',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 40,
    bottom: '12%',
    right: '5%',
  },
  etaText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  menuContainer: {
    width: '95%',
    justifyContent: 'center',
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 10,
  },
  menuCalories: {
    color: 'grey',
    fontSize: 14,
    paddingBottom: 5,
  },
  menuPriceContainer: {
    position: 'absolute',
    right: 0,
  },
  menuPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailsContainer: {
    flex: 1,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "lightskyblue",
  },
  detailsTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: "10%",
    padding: 20,
    color: "mintcream",
  },
  detailsImage: {
    width: '80%',
    height: 250,
    backgroundColor: "aliceblue",
    borderRadius: 10,
    marginLeft: "10%",
    marginRight: "10%",
  },
  contentContainer: {
    marginTop: "5%",
    marginBottom: "5%",
    marginLeft: "10%",
    marginRight: "10%",
  },
  detailsCalorie: {
    textAlign: 'left',
    fontSize: 24,
    fontWeight: 'bold',
    color: "mintcream",
  },
  detailsDescription: {
    textAlign: 'left',
    marginTop: "10%",
    marginBottom: "20%",
    fontSize: 20,
    color: "mintcream",
    fontStyle: 'italic',
  }
});
