import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Text>มีสิ่งอื่นอีกไหม</Text>
            {/* <Button title='Go to About Page again...' 
            onPress={()=>navigation.push('About')}></Button>
            <Button title='Go to Home Page' 
            onPress={()=>navigation.navigate('Home')}></Button>
            <Button title='Go Back' 
            onPress={()=>navigation.goBack()}></Button>
            <Button title='Go Back' 
            onPress={()=>navigation.popToTop()}></Button> */}
        </View>
    )
}

export default AboutScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})