import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    clicked: false
  }

  toggleSprite = () => this.setState({ clicked: !this.state.clicked })

  render() {
    const { sprites, name, stats } = this.props.pokemon
    const hp = stats.find(stat => stat.name === 'hp').value || 50
    const spriteFlag = this.state.clicked ? sprites.back : sprites.front
    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={this.toggleSprite} alt="oh no!" src={spriteFlag} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
