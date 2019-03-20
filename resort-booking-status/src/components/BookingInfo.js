import React, { Component } from 'react';

class BookingInfo extends Component {
  static defaultProps = {
    roomSectorsInfo: [],
    searchDateInfo: []
  }

  makeThead = () => {
    const { searchDateInfo } = this.props;
    const searchDateCount = searchDateInfo.length;

    let thead = [];
    let parent = [];
    let children1 = [];
    let children2 = [];
    let children3 = [];

    for(let i=0; i<searchDateCount; i++){
      children3.push(<div className="col-sm d-flex justify-content-center">{searchDateInfo[i]}</div>);
    }
    children1.push(<th scope="col"><div className="d-flex justify-content-center">구분</div></th>);
    children2.push(<th scope="col"><div className="d-flex justify-content-center">객실</div></th>);
    parent.push(<tr>{children1}{children2}<th scope="col"><div className="row">{children3}</div></th></tr>);
    thead.push(<thead>{parent}</thead>);

    return thead;
  }

  makeTbody = () => {
    const { roomSectors } = this.props.roomSectorsInfo;
    const roomSectorCount = roomSectors.length;

    let tbody = [];
    let parent = [];
    let children1 = [];
    let children2 = [];
    let children3 = [];
    let statusInfo = [];

    for(let roomSectorIdx=0; roomSectorIdx<roomSectorCount; roomSectorIdx++) {
      const rooms = roomSectors[roomSectorIdx].rooms;
      const roomsCount = rooms.length;

      for(let roomIdx=0; roomIdx<roomsCount; roomIdx++) {
        children1 = [];
        children2 = [];
        children3 = [];
        statusInfo = [];

        const roomStatuses = rooms[roomIdx].roomStatuses;
        const roomStatusesCount = roomStatuses.length;

        for(let roomStatusIdx=0; roomStatusIdx<roomStatusesCount; roomStatusIdx++) {
          let statusBtn = [];
          if(roomStatuses[roomStatusIdx].status === '예약가능') {
            statusBtn.push(<button type="button" className="btn btn-info">{roomStatuses[roomStatusIdx].status}</button>);
          } else {
            statusBtn.push(<button type="button" className="btn btn-secondary">{roomStatuses[roomStatusIdx].status}</button>);
          }
          statusInfo.push(<div className="col-sm d-flex justify-content-center">{statusBtn}</div>)
        }

        if(roomIdx === 0) {
          children1.push(<th className="w-10 p-3 align-middle" scope="row" rowSpan={roomsCount}><div className="d-flex justify-content-center">{roomSectors[roomSectorIdx].name}</div></th>)
        }
        children2.push(<td className="w-20 p-3 align-middle">{rooms[roomIdx].name}</td>)
        children3.push(<td><div className="row">{statusInfo}</div></td>)

        parent.push(<tr>{children1}{children2}{children3}</tr>)
      }
    }
    tbody.push(<tbody>{parent}</tbody>)
    return tbody;
  }

  render() {
    const {roomSectorsInfo} = this.props;
    return (
      <div className="tab-content">
          <div className="tab-pane fade show active" id="tag1">
              <div className="row">
                  <div className="col-lg-12">
                      <br/>
                      <div className="page-header">
                          <h1>{roomSectorsInfo.name}</h1>
                      </div>
                      <table className="table table-bordered">
                        {this.makeThead()}
                        {this.makeTbody()}
                      </table>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default BookingInfo;
