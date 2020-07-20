import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles, typography} from 'material-ui/styles'
import { List } from 'material-ui'


class Users extends Component {
    state = {
        users: []
    }
  
    componentDidMount() {
      list().then((data) => {
        if (data.error) {
          console.log(data.error)
        } else {
          this.setState({users: data})
        }
      })
    }

    render() {
        const {classes} = this.props
        return (
            <Paper>
                <Typography>
                    All Users
                </Typography>
                <List>
                    return <Link>
                        <ListItem button>
                            <ListItemAvatar>
                                
                            </ListItemAvatar>
                        </ListItem>
                    </Link>
                </List>
            </Paper>
    )
  }
}



Users.propTypes = {
    classes: PropTypes.object.isRequired
}
     
export default withStyles(styles)(Users)