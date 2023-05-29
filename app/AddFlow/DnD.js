import React, { useCallback, useEffect, useRef, useState } from "react";
import Xarrow from "react-xarrows";
import Draggable from "react-draggable";
// import "./styles.css";
import AddIcon from "@mui/icons-material/Add";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { v4 as uuidv4 } from "uuid";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const connectPointStyle = {
  position: "absolute",
  width: 15,
  height: 20,
  borderRadius: "50%",
  background: "black",
  padding:"5%"
};
const connectPointOffset = {
  left: { left: 0, top: "50%", transform: "translate(-50%, -50%)" },
  right: { left: "100%", top: "50%", transform: "translate(-50%, -50%)" },
  top: { left: "50%", top: 0, transform: "translate(-50%, -50%)" },
  bottom: { left: "50%", top: "100%", transform: "translate(-50%, -50%)" },
};

const ConnectPointsWrapper = ({ boxId, handler, dragRef, boxRef }) => {
  const ref1 = useRef();

  const [position, setPosition] = useState({});
  const [beingDragged, setBeingDragged] = useState(false);
  return (
    <React.Fragment>
      <div
        className="connectPoint"
        style={{
          ...connectPointStyle,
          ...connectPointOffset[handler],
          ...position,
        }}
        draggable
        onMouseDown={(e) => e.stopPropagation()}
        onDragStart={(e) => {
          setBeingDragged(true);
          e.dataTransfer.setData("arrow", boxId);
        }}
        onDrag={(e) => {
          const { offsetTop, offsetLeft } = boxRef.current;
          const { x, y } = dragRef.current.state;
          setPosition({
            position: "fixed",
            left: e.clientX - x - offsetLeft,
            top: e.clientY - y - offsetTop,
            transform: "none",
            opacity: 0,
          });
        }}
        ref={ref1}
        onDragEnd={(e) => {
          setPosition({});
          setBeingDragged(false);
        }}
      />
      {beingDragged ? <Xarrow start={boxId} end={ref1} /> : null}
    </React.Fragment>
  );
};

const boxStyle = {
  border: "1px solid black",
  position: "relative",
  padding: "20px 10px",
};

const Box = ({ text, handler, deleteBox,addBox,EditBox, id, addArrow, setArrows, boxId }) => {
  const dragRef = useRef();
  const boxRef = useRef();
  const [EditStart, setEditStart] = useState(false)
  const [EditBoxText, setEditBoxText] = useState(text)


  return (
    <Draggable
      bounds="body"
      ref={dragRef}
      onDrag={(e) => {
        // console.log(e);
        setArrows((arrows) => [...arrows]);
      }}
    >
      <div
        id={boxId}
        ref={boxRef}
        style={boxStyle}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          if (e.dataTransfer.getData("arrow") === boxId) {
            console.log(e.dataTransfer.getData("arrow"), boxId);
          } else {
            const refs = { start: e.dataTransfer.getData("arrow"), end: boxId };
            addArrow(refs);
            console.log("droped!", refs);
          }
        }}
        className="rounded-xl bg-purple-100 font-semibold capitalize group min-w-[20%]"
      >
        {!EditStart ?<> <p>{text}</p> <ConnectPointsWrapper {...{ boxId, handler, dragRef, boxRef }} /> </>: <div className="flex items-center border-b-2 border-green-500"><input value={EditBoxText} onChange={(e) => e.target.value?.length < 21 && setEditBoxText(e.target.value)} className="bg-transparent focus:outline-none"  /><IconButton onClick={() => {
          EditBox(id,EditBoxText);
          setEditStart(false);
        }}><CheckCircleOutlineIcon className="text-green-600" /></IconButton></div>}
       
        <div className="absolute -bottom-0 w-full flex justify-center items-center opacity-0 invisible transition-all group-hover:opacity-100 group-hover:-bottom-[53px] group-hover:visible">
          <div className="bg-red-50 py-2 px-2 rounded-xl">
           {!EditStart && <AddIcon onClick={() => addBox(text)} className="px-2 text-4xl rounded-lg hover:bg-white text-purple-600 cursor-pointer" />}
           {EditStart ? <CloseIcon onClick={() =>{ EditBox(id,text); setEditStart(false);}} className="px-2 text-4xl rounded-lg hover:bg-white text-purple-600 cursor-pointer" /> :  <ModeEditOutlineIcon onClick={() => setEditStart(true)} className="px-2 text-4xl rounded-lg hover:bg-white text-purple-600 cursor-pointer" />}
           {!EditStart && <DeleteIcon
              onClick={() => deleteBox(id)}
              className="px-2 text-4xl rounded-lg hover:bg-white text-red-600 cursor-pointer"
            />}
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default function DnD({ LeftClickValues, setLeftClickValues }) {
  const [arrows, setArrows] = useState([]);
  const [ListofBox, setListofBox] = useState([]);
  useEffect(() => {
    if (LeftClickValues) {
      const newId = uuidv4();
      setListofBox((prev) => [...prev, { id: newId, title: LeftClickValues }]);
      setLeftClickValues(false);
    }
    console.log("arrows1", ListofBox);
  }, [LeftClickValues]);

  const deleteBox = useCallback((ids) => {
    console.log(ids);
    setArrows((current) => current.filter((e) => e.start != ids && e.end != ids));
    setListofBox((current) => current.filter((e) => e.id != ids));
  }, []);

  const addBox = useCallback((value) => {
    const newId = uuidv4();
      setListofBox((prev) => [...prev, { id: newId, title: value }]);
  }, []);

  const EditBox = useCallback((ids,value) => {
      setListofBox((prev) => prev.map((e) => e.id == ids ? {...e,title: value} : e ));
  }, []);
console.log("arrows",arrows)
  const addArrow = ({ start, end }) => {
    setArrows([...arrows, { start, end }]);
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      {/* two boxes */}
      {ListofBox.map((e) => (
        <Box
          text={e.title}
          id={e.id}
          {...{
            addArrow,
            setArrows,
            deleteBox,
            EditBox,
            addBox,
            handler: "right",
            boxId: `${e.id}`,
          }}
        />
      ))}
      {/* <Box
        text="drag my handler to second element"
        {...{ addArrow, setArrows, handler: "right", boxId: "box2_1" }}
      />
      <Box
        text="second element"
        {...{ addArrow, setArrows, handler: "left", boxId: "box2_2" }}
      /> */}
      {arrows.map((ar) => (
        <Xarrow
          start={ar.start}
          end={ar.end}
          key={ar.start + "-." + ar.start}
        />
      ))}
    </div>
  );
}
