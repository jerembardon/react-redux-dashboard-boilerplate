// import React, { Component } from "react";
// import { addRessource, getSpecialRessource } from "../../actions";
// import {
//   getIntegerList,
//   getContainsOneList,
//   getPrimeNumberList,
//   getSpecialNumbersList
// } from "../../helpers/selectors";
// import { connect } from "react-redux";

// class Ressources extends Component {
//   componentWillMount() {
//     this.props.getSpecialRessource();
//   }
//   renderRessources = ressources => {
//     return ressources.map(ressource => <li>{ressource}</li>);
//   };

//   render() {
//     return (
//       <div>
//         <div className="row">
//           <div className="col">
//             <button
//               type="button"
//               onClick={() => this.props.addRessource()}
//               className="btn btn-raised btn-primary"
//             >
//               Ajouter un nombre
//             </button>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col">
//             {" "}
//             Entiers{" "}
//             <ul>{this.renderRessources(this.props.integerRessources)}</ul>
//           </div>
//           <div className="col">
//             {" "}
//             Contiennent 1 <ul />
//             {this.renderRessources(this.props.containeOneRessources)}
//           </div>
//           <div className="col">
//             {" "}
//             Entier premiers
//             <ul>{this.renderRessources(this.props.primeNumber)}</ul>
//           </div>
//           <div className="col">
//             {" "}
//             Entier premiers contenant 1
//             <ul>{this.renderRessources(this.props.specialNumbersList)}</ul>
//           </div>
//         </div>
//         {this.props.message}
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     integerRessources: getIntegerList(state),
//     containeOneRessources: getContainsOneList(state),
//     primeNumber: getPrimeNumberList(state),
//     specialNumbersList: getSpecialNumbersList(state),
//     message: state.ressources.message
//   };
// };

// const mapDispatchToProps = {
//   addRessource,
//   getSpecialRessource
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Ressources);
