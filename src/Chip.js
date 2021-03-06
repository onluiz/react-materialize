import React, { useEffect, useRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from './Icon';
import { autocompleteOptions } from './Autocomplete';

const Chip = ({ children, close, closeIcon, className, options, ...other }) => {
  const instance = useRef(null);
  const chipRef = useRef(null);

  const classes = cx(className, {
    chip: !options,
    chips: options
  });

  const chipContent = options ? null : (
    <Fragment>
      {children}
      {Boolean(close) && closeIcon}
    </Fragment>
  );

  useEffect(() => {
    if (options) {
      instance.current = M.Chips.init(chipRef.current, options);
    }

    return () => {
      if (instance.current) {
        instance.current.destroy();
      }
    };
  }, [options, children]);

  return (
    <div className={classes} {...other} ref={chipRef}>
      {chipContent}
    </div>
  );
};

Chip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  /**
   * Shows a close icon
   */
  close: PropTypes.bool,
  closeIcon: PropTypes.node,
  /**
   * Options object for the Chip Javascript Plugin
   */
  options: PropTypes.shape({
    /**
     * Set the chip data
     */
    data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    /**
     * Set first placeholder when there are no tags.
     */
    placeholder: PropTypes.string,
    /**
     * Set second placeholder when adding additional tags.
     */
    secondaryPlaceholder: PropTypes.string,
    /**
     * Set chips limit.
     */
    limit: PropTypes.number,
    /**
     * Callback for chip add.
     */
    onChipAdd: PropTypes.func,
    /**
     * Callback for chip select.
     */
    onChipSelect: PropTypes.func,
    /**
     * Callback for chip delete.
     */
    onChipDelete: PropTypes.func,
    /**
     * Set autocomplete options.
     * Note: onAutocomplete does not work in Chip
     */
    autocompleteOptions: autocompleteOptions
  })
};

Chip.defaultProps = {
  close: false,
  closeIcon: <Icon className="close">close</Icon>,
  options: null
};

export default Chip;
