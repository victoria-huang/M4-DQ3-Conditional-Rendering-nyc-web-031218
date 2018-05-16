import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  state = {
    pages: [
      {
        id: 1,
        name: "profile",
        page: <Profile />,
        active: "item active",
      },

      {
        id: 2,
        name: "photos",
        page: <Photos />,
        active: "item",
      },

      {
        id: 3,
        name: "cocktails",
        page: <Cocktails />,
        active: "item",
      },

      {
        id: 4,
        name: "pokemon",
        page: <Pokemon />,
        active: "item",
      },
    ]
  }

  handleClick = (id) => {
    const pages = this.state.pages.map((page) => {
      if (page.id === id) {
        return ({...page, active: "item active"});
      } else
        return ({...page, active: "item"});
      }
    )

    this.setState({
      pages
    })
  }

  render() {
    const activeDisplay = this.state.pages.find((page) => {
      return page.active === "item active"
    })
    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */
    const detailsToDisplay = <div>{ activeDisplay.page }</div>

    return (
      <div>
        <MenuBar { ...this.state } click={ this.handleClick } />
        { detailsToDisplay }
      </div>
    )
  }

}

export default MainBox
