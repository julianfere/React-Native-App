const flatListData = new Array(100).fill(undefined).map((_, index) => ({
  id: index,
  title: `Note ${index}`,
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta nisl eu fermentum finibus. Nunc purus quam, placerat quis hendrerit ac, varius ac ipsum. Donec quis odio purus. Nam cursus erat orci, vel mattis dui aliquam vitae. Donec porta, leo nec sollicitudin sodales, lacus est maximus arcu, at suscipit mi metus venenatis ante. Suspendisse accumsan arcu velit, quis consectetur quam sollicitudin vitae. Sed a elit a est fringilla porta non et metus. Ut sodales ante vitae justo molestie imperdiet quis a orci. Phasellus eget porta enim. Cras venenatis leo quis venenatis convallis. Donec quis diam turpis. Cras viverra est quis lorem eleifend dictum. Fusce eget neque elit.'.slice(
      0,
      Math.floor(Math.random() * 400),
    ),
}));

export {flatListData};
