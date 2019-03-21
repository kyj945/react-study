import React, { Component } from 'react';

class BookingInfo extends Component {
  static defaultProps = {
    roomSectorsInfo: [],
    searchDateInfo: [],
  }

  makeThead = () => {
    const { searchDateInfo } = this.props;
    const searchDateCount = searchDateInfo.length;

    const thead = [];
    const dateInfo = [];

    for (let i = 0; i < searchDateCount; i += 1) {
      dateInfo.push(<div className="col-sm d-flex justify-content-center">{searchDateInfo[i]}</div>);
    }
    thead.push(
      <thead>
        <tr>
          <th scope="col"><div className="d-flex justify-content-center">구분</div></th>
          <th scope="col"><div className="d-flex justify-content-center">객실</div></th>
          <th scope="col"><div className="row">{dateInfo}</div></th>
        </tr>
      </thead>,
    );

    return thead;
  }

  makeTbody = () => {
    const { roomSectors } = this.props.roomSectorsInfo;
    const roomSectorCount = roomSectors.length;

    const tbody = [];
    const resortStatusInfo = [];
    let roomSectorName = [];
    let statusInfo = [];

    for (let roomSectorIdx = 0; roomSectorIdx < roomSectorCount; roomSectorIdx += 1) {
      const { rooms } = roomSectors[roomSectorIdx];
      const roomsCount = rooms.length;

      for (let roomIdx = 0; roomIdx < roomsCount; roomIdx += 1) {
        roomSectorName = [];
        statusInfo = [];

        const { roomStatuses } = rooms[roomIdx];
        const roomStatusesCount = roomStatuses.length;

        for (let roomStatusIdx = 0; roomStatusIdx < roomStatusesCount; roomStatusIdx += 1) {
          const statusBtn = [];
          if (roomStatuses[roomStatusIdx].status === '예약가능') {
            statusBtn.push(<button type="button" className="btn btn-info">{roomStatuses[roomStatusIdx].status}</button>);
          } else {
            statusBtn.push(<button type="button" className="btn btn-secondary">{roomStatuses[roomStatusIdx].status}</button>);
          }
          statusInfo.push(<div className="col-sm d-flex justify-content-center">{statusBtn}</div>);
        }
        if (roomIdx === 0) {
          roomSectorName.push(<th className="w-10 p-3 align-middle" scope="row" rowSpan={roomsCount}><div className="d-flex justify-content-center">{roomSectors[roomSectorIdx].name}</div></th>);
        }
        resortStatusInfo.push(
          <tr>
            {roomSectorName}
            <td className="w-20 p-3 align-middle">{rooms[roomIdx].name}</td>
            <td><div className="row">{statusInfo}</div></td>
          </tr>,
        );
      }
    }
    tbody.push(<tbody>{resortStatusInfo}</tbody>);
    return tbody;
  }

  render() {
    const { roomSectorsInfo } = this.props;
    return (
      <div className="tab-content">
        <div className="tab-pane fade show active" id="tag1">
          <div className="row">
            <div className="col-lg-12">
              <br />
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
