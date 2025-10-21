import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function RadioButton({
  label,
  selected,
  onPress,
}: {
  label: string;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.radioButton}>
      <View style={[styles.radioCircle, selected && styles.radioCircleSelected]} />
      <Text style= {styles.radioText}>{label}</Text>
    </TouchableOpacity>
  );
}
export default RadioButton
const styles = StyleSheet.create({
    radioGroup: {
        alignSelf: "flex-start",
        marginBottom: 20,
    },

    radioLabel: {
        fontWeight: "bold",
        marginBottom: 8,
    },

    radioButton: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },

    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#555",
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    radioCircleSelected: {
        backgroundColor: "#555",
    },

    radioText: {
        fontSize: 16,
    }

    
})
