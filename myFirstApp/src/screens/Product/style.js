import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    label: {
        width: "90%",
        marginTop: 20,
        fontSize: 10,
        marginLeft: 20,
        color: "#F92E6A",
    },
    input: {
        width: "90%",
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#F92E6A",
        marginLeft: "auto",
        marginRight: "auto"
    },
    buttonNew: {
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 30,
        left: 20,
        backgroundColor: "#F92E6A",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonSair: {
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 30,
        left: 90,
        backgroundColor: "#F92E6A",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    iconButton: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    }
});

export default styles
