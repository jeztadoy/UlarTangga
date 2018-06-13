import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'

class PapanScreen extends React.Component {
  static navigationOptions = {
    title: 'Game'
  } 
  constructor() {
    super()
    this.state = {
      timer: 20,
      status: false,
      pesan: ''
    }

    this.hitungMundur = this.hitungMundur.bind(this)
    this.lemparDadu = this.lemparDadu.bind(this)
  }

  hitungMundur() {
      if (newTimer >= 20) {
      this.setState({
        timer: newTimer
      })
    } else {
      alert('Game Over!')
      this.props.navigation.navigate('Login')
      clearInterval(this.state.intervalId)
    }
  }

  lemparDadu() {
    let { posisi, status, timer, pesan } = this.state
    let random = Math.floor(Math.random() * 6 + 1)
    posisi += random

       this.setState({
      posisi: posisi,
      random: random,
      status: status,
      pesan: pesan
    })


  render() {

    const nama = this.props.navigation.getParam('nama', 'Anonymous')
    const { posisi, random, timer, pesan, status } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.containerNama}>
          <Text style={styles.nama}>{nama}</Text>
        </View>
        <View style={styles.containerKotak}>
          <ListKotak posisi={posisi} />
        </View>
        <View style={styles.containerDadu}>
          <Text style={styles.textDadu}>Dadu {'\n'}{random}</Text>
          <Text style={styles.textDadu}>Timer {'\n'}{timer}</Text>
          <Text style={styles.textDadu}>Posisi letak {'\n'}{posisi}</Text>
        </View>
        <View style={styles.containerButton}>
          <Button
            style={styles.button}
            title="Lempar Dadu"
            onPress={this.lemparDadu} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerNama: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  nama: {
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold'
  },
   containerDadu: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'stretch',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
     button: {
    color: 'white',
    borderWidth: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
 
})

export default PapanScreen
