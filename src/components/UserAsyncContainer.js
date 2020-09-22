import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UserAsyncContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers()
  }, [])

  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{ userData.error }</h2>
  ) : (
    <div>
      <h2>UserList</h2>
      <div>
        { userData.users.map(user => <h2>{ user.name }</h2>) }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAsyncContainer)
