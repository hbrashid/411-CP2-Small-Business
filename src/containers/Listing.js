import { connect } from 'react-redux'
import Listing from '../components/Listing'


const mapStateToProps = (state) => {
    return {
        businesses: state.businesses
    }
}

export default connect(mapStateToProps)(Listing)