import { View, Box, Text } from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Register = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <Box>
        <Text color={"amber.100"}>Register Page</Text>
      </Box>
    </View>
  );
};

export default Register;
