import React, { Component } from 'react';
import PhoneForm from './PhoneForm'
import PhoneInfoList from './PhoneInfoList'

class PhoneBook extends Component {
  id = 2;
  constructor(props) {
    super(props);
    this.state = {
      information: [
        {
          id: 0,
          name: 'k',
          phone: '010'
        },
        {
          id: 1,
          name: 'jj',
          phone: '11'
        }
      ],
      keyword: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    });
  }

  handleCreate = (data) => {
    const { information } = this.state
    this.setState({
      information: information.concat({ id:this.id++, ...data })
    })
  }

  handleRemove = (id) => {
    const { information } = this.state
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state
    this.setState({
      information: information.map(
        info => id === info.id ? {...info, ...data} : info
      )
    })
  }

  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      (info, index) => info.name.indexOf(keyword) !== -1
    );

    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}>
        </PhoneForm>
        <p>
          <input
            placeholder="검색할 이름"
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        <hr />
        <PhoneInfoList
          data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}></PhoneInfoList>
      </div>
    );
  }

}

export default PhoneBook;
/*class PhoneBook extends Component {
  id = 2;
  constructor(props) {
    super(props);
    this.state = {
      information: [
        {
          id: 0,
          name: 'k',
          phone: '010'
        },
        {
          id: 1,
          name: 'jj',
          phone: '11'
        }
      ]
    }
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
  render (){
    const { information } = this.state;
    return(
      <div>
        <PhoneForm onCreate={this.handleCreate}></PhoneForm>
        {JSON.stringify(information)}
      </div>
    );
  }
}

export default PhoneBook;*/
