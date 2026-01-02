import cocoa from "@/assets/Lottie/Toogle.json";
import LottieView from 'lottie-react-native';

export default function SplashScreen({ onFinish = (isCancelled) => { } }: { onFinish?: (isCancelled: boolean) => void }) {

    //<ThemedText>Loading... Splash Screen</ThemedText>
    return (

        <LottieView
            source={cocoa}
            onAnimationFinish={onFinish}
            autoPlay
            resizeMode="cover"
            loop={false}
            style={{ width: "50%", flex: 1 }}
        />

    )
}