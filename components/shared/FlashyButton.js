import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import FlashyStyles from './flashyStyles'

const FlashyButton = ({ children, onPress, ...props }) => (
    <TouchableOpacity style={[FlashyStyles.roundedBorder, styles.flashyButton, { backgroundColor: props.disabled ? 'darkgrey' : '#000' }]} {...props} onPress={onPress} >
        <Text style={styles.flashyText} >{children}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    flashyButton: {
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#000',
        color: '#fff',
        height: 46,
        marginTop: 8,

    },
    flashyText: {
        ...FlashyStyles.textInput,
        textAlign: 'center',
        color: '#fff',
    }
})

export default FlashyButton