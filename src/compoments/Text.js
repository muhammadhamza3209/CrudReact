import { useState } from "react";
import { useEffect } from "react";
import { Data } from "../../src/constant/Data";
export default function Text() {
  const [data, setData] = useState([]);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [classs, setClass] = useState();
  const [id, setId] = useState();
  const [updata, setUpdata] = useState(false);

  useEffect(() => {
    setData(Data);
  }, []);

  const handleEdit = (id) => {
    const dt = data.filter((item) => item.id === id);
    setUpdata(true);
    if (dt !== undefined) {
      setFirstName(dt[0].firstName);
      setLastName(dt[0].lastName);
      setClass(dt[0].class);
      setId(dt[0].id);
    }
  };

  const handleDelet = (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure you want to delete")) {
        const dt = data.filter((item) => item.id !== id);
        setData(dt);
      }
    }
  };

  const handleSave = () => {
    if (!firstName || !lastName || !classs) {
      alert("Please Fill all the inputs");
      return;
    }
    const dt = [...data];

    const object = {
      id: data.length + 1,
      firstName: firstName,
      lastName: lastName,
      class: classs,
    };

    dt.push(object);
    setData(dt);
  };

  const handleUpdate = () => {
    const index = data
      .map((item) => {
        return item.id;
      })
      .indexOf(id);

    const dt = [...data];

    dt[index].firstName = firstName;
    dt[index].lastName = lastName;
    dt[index].class = classs;

    setData(dt);
    handleClear();
  };

  const handleClear = () => {
    setFirstName("");
    setLastName("");
    setClass("");
    setId(0);
    setUpdata(false);
  };

  const onChangeName = (e) => {
    setFirstName(e.target.value);
  };

  const onChangeLast = (e) => {
    setLastName(e.target.value);
  };

  const onChangeClass = (e) => {
    setClass(e.target.value);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "red",
          color: "white",
          padding: "20px",
        }}
      >
        <div>
          <label>
            First Name:
            <input
              type="text"
              placeholder="enter firstName"
              value={firstName}
              onChange={onChangeName}
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              placeholder="enter LasttName"
              value={lastName}
              onChange={onChangeLast}
            />
          </label>
        </div>
        <div>
          <label>
            Class:
            <input
              type="text"
              placeholder="enter class"
              value={classs}
              onChange={onChangeClass}
            />
          </label>
        </div>

        {!updata ? (
          <button onClick={() => handleSave()} className="btn btn-success">
            Save
          </button>
        ) : (
          <button onClick={() => handleUpdate()} className="btn btn-danger">
            UPdate
          </button>
        )}

        <div>
          <button onClick={() => handleClear()} className="btn btn-primary">
            Clear
          </button>
        </div>
      </div>
      <br />
      <br />

      <table className="table table-hover">
        <thead>
          <tr>
            <td>id</td>
            <td>first Name</td>
            <td>last Name</td>
            <td>Class</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.class}</td>
                <td
                  onClick={() => handleEdit(item.id)}
                  className="btn btn-primary"
                >
                  Edit
                </td>
                <td
                  onClick={() => handleDelet(item.id)}
                  className="btn btn-danger "
                >
                  Delet
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* <div className="container">
        <div className="row">
          <div className="col">
            <table border={4}>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>number</th>
                <th>class</th>
                <th>email</th>
              </tr>
              {data.map((item) => {
                return (
                  <tr>
                    <th>{item.id}</th>
                    <th>{item.name}</th>
                    <th>{item.number}</th>
                    <th>{item.class}</th>
                    <th>{item.email}</th>
                    <th>
                      <button
                      
                        className="btn btn-success"
                      >
                        update
                      </button>
                    </th>
                    <th>
                      <button
                      
                        className="btn btn-danger text-white"
                      >
                        delet
                      </button>
                    </th>
                  </tr>

                

                  
                );
              })}
            </table>
          </div>
        </div>
      </div> */}
    </>
  );
}
// }}
