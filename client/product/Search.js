import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import MenuItem from 'material-ui/Menu/MenuItem'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import SearchIcon from 'material-ui-icons/Search'
import {list} from './api-product.js'
import Products from './Products'

const styles = theme => {

}
class Search extends Component {
    state= {
        category: '',
        search: '',
        results: [],
        searched: false
    }

    handleChange = name => {
        this.setState({
            [name]: event.target.value,
        })
    }

    search = () => {
        if(this.state.search){
          list({
            search: this.state.search || undefined, category: this.state.category
          })
          .then((data) => {
            if (data.error) {
              console.log(data.error)
            } else {
              this.setState({results: data, searched:true})
            }
          })
        }
    }

    enterKey = (event) => {

    }

    render() {
        const { classes } = this.props
        return (
            <div>
                <Card className = { classes.card }>
                    <TextField>
                        <MenuItem>
                            All
                        </MenuItem>
                        { this.props.categories.map(Option => (
                            <MenuItem>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField />

                    <Button>
                        <SearchIcon />
                    </Button>
                    <Divider />
                    <Products Products = { this.state.results } searched = { this.state.searched } />
                </Card>
            </div>
        )
    }    
}

Search.propTypes = {
    classes: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired
}
  
export default withStyles(styles)(Search)