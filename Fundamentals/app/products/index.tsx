import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function ProductList(){
    return(
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap:20
        }}>
            <Text>Product List</Text>
            <Link href='./1' relativeToDirectory>Product 1</Link>
            <Link href='/products/2'>Product 2</Link>
            <Link href='/products/3'>Product 3</Link>
            <Link href='/products/4'>Product 4</Link>

            <Link href='/products/best-sellers/iphone'>Iphone (Best Sellers)</Link>
            <Link href='/products/deals/iphone'>Iphone 4 (Deals)</Link>

        </View>
    )
}