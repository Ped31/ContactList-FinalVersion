import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Modal = props => {
	const { store, actions } = useContext(Context);
	const deleteContact = "";

	const [state, setState] = useState({});
	const handelDelete = () => {
		actions.deleteContact(store.idName);
		console.log(store.idName);
	};

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<p>Warning: unknown consequences after this point... Kidding!</p>
					</div>
					<div className="modal-footer">
						<button onClick={() => props.onClose()} type="button" className="btn btn-primary">
							Oh no!
						</button>

						<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handelDelete}>
							Do it!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	location: PropTypes.object,
	id: PropTypes.any,
	contact: PropTypes.object
};

Modal.defaultProps = {
	show: false,
	onClose: null
};
