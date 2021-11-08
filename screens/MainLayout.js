import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    FlatList
} from 'react-native';
import Animated, {useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated'
import {connect } from 'react-redux'
import { setSelectedTab } from '../stores/tab/tabAction'
import {Home, Search, CartTab, Favourite, Notification} from '../screens'
import {COLORS, FONTS, SIZES, icons, images, dummyData} from '../constants'

const MainLayout = ({drawerAnimationStyle }) => {
    return (
        <Animated.View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:'white',
                ...drawerAnimationStyle
            }}
        >
            {/* Header */}
            {/* Content */}
            <Text>MainLayout</Text>
            {/* Footer */}
        </Animated.View>
    )
}

export default MainLayout