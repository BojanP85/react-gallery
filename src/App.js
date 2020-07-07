import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { FaTimesCircle } from 'react-icons/fa';

import Header from './components/Header/Header';
import Title from './components/Title/Title';
import GridView from './components/Gallery/GridView/GridView';
import ListView from './components/Gallery/ListView/ListView';
import Footer from './components/Footer/Footer';

const GridWrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 88%;
  margin: auto;
  margin-bottom: 7rem;
  box-sizing: border-box;

  @media(max-width: 992px) {
    width: 100%;
    justify-content: space-around;
    padding-left: 0;
    padding-right: 0;
  }
`;

const ListWrapper = styled.section`
  width: 88%;
  margin: auto;
  margin-bottom: 8rem;

  @media(max-width: 992px) {
    width: 94.5%;
  }
`;

const NoResultsMsg = styled.span`
  font-size: 2rem;
  margin-left: 10%;
`;

const DividingLine = styled.hr`
  margin-top: 10rem;
  width: 80%;
  height: 0.2rem;
  border: none;
  background-color: #cccfcd;
`;

const Close = styled(FaTimesCircle)`
  vertical-align: -15%;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

class App extends Component {
  state = {
    gallery: [],
    searchTerm: '',
    searchResults: [],
    isSearchActive: false
  }

  componentDidMount() {
    axios.get('https://picsum.photos/v2/list?limit=9')
      .then(response => {
        const updatedGallery = response.data;
        this.setState({
          gallery: updatedGallery
        });
      })
      .catch(error => {
        console.log(error)
      });
  }

  /* Resizing the pictures through a URL change */
  resizePicHandler = (pic_url) => {
    let picURL = pic_url;
    let sliced_picURL = picURL.slice(0, picURL.length-9);
    let new_dimensions = "367/267";
    let final_picURL = sliced_picURL.concat(new_dimensions);
    return final_picURL;
  }

  keyPressHandler = (event) => {
    if(event.charCode === 13) {
      this.searchTermHandler(this.state.searchTerm);
    }
  }

  searchTermHandler = (searchTerm) => {
    const searchResultsArr = [];
    if(searchTerm !== '') {
      this.setState({ isSearchActive: true });
      this.props.history.push('/?' + searchTerm);
      this.state.gallery.forEach(result => {
        let author = result.author;
        if(author.search(new RegExp(searchTerm, "i")) !== -1) {
          searchResultsArr.push(result);
        }
      });
      this.setState({
        searchTerm: '',
        searchResults: searchResultsArr
      });
    }
  }

  closeSearchHandler() {
    this.setState({ isSearchActive: false });
    this.props.history.push('/');
  }

  listView(id, url, author, width, height, download_url) {
    return (
      <ListView
        key={id}
        src={url}
        author={author}
        width={width}
        height={height}
        link={download_url}
      />
    );
  }

  render() {
    const foundResults = this.state.searchResults.map(result => {
      let final_picURL = this.resizePicHandler(result.download_url);
      return this.listView(result.id, final_picURL, result.author, result.width, result.height, result.download_url);
    });

    const galleryGrid = this.state.gallery.slice(0, 6).map(picture => {
      let final_picURL = this.resizePicHandler(picture.download_url);
      return (
        <GridView
          key={picture.id}
          src={final_picURL}
          author={picture.author}
          width={picture.width}
          height={picture.height}
          link={picture.download_url}
        />
      );
    });

    const galleryList = this.state.gallery.slice(6, 9).map(picture => {
      let final_picURL = this.resizePicHandler(picture.download_url);
      return this.listView(picture.id, final_picURL, picture.author, picture.width, picture.height, picture.download_url);
    });

    return (
      <>
        {/*  Header  */}
        <Header
          value = {this.state.searchTerm}
          change={(event) => this.setState({searchTerm: event.target.value})}
          keyPress={this.keyPressHandler}
          clicked={() => this.searchTermHandler(this.state.searchTerm)}
        />

        {/*  Search results  */}
        {this.state.isSearchActive ?
            <ListWrapper>
              <Title List>Search results / <Close onClick={() => this.closeSearchHandler()} /></Title>
              {this.state.searchResults.length !== 0 ? foundResults : <NoResultsMsg>No results were found</NoResultsMsg>}
              <DividingLine />
            </ListWrapper> : null
        }

        {/*  Gallery - Grid  */}
        <GridWrapper>
          <Title>Hot Tickets</Title>
          {galleryGrid}
        </GridWrapper>

        {/*  Gallery - List  */}
        <ListWrapper>
          <Title List>Upcoming Events</Title>
          {galleryList}
        </ListWrapper>

        {/*  Footer  */}
        <Footer />
      </>
    );
  }
}

export default withRouter(App);
