/**
 * Ext.ux.form.XCheckbox - checkbox with configurable submit values
 *
 * @author  Ing. Jozef Sakalos
 * @version $Id: Ext.ux.form.XCheckbox.js 441 2009-01-12 11:10:10Z jozo $
 * @date    10. February 2008
 * url: http://www.sencha.com/forum/showthread.php?25924-XCheckbox-A-nicer-checkbox-always-submitting-configurable-values/page10&p=211041#post211041
 *
 * @license Ext.ux.form.XCheckbox is licensed under the terms of
 * the Open Source LGPL 3.0 license.  Commercial use is permitted to the extent
 * that the code/component(s) do NOT become part of another Open Source or Commercially
 * licensed development library or toolkit without explicit permission.
 * 
 * License details: http://www.gnu.org/licenses/lgpl.html
 *
 *
 * Modified by Loiane Groner (me@loiane.com) - July 2012 - Ported to Ext JS 4
 * http://loianegroner.com (English)
 * http://loiane.com (Portuguese)
 *
 * Plugin repository: https://github.com/loiane/Ext4-ux-form-XCheckbox
 */

/**
  * @class Ext.ux.form.XCheckbox
  * @extends Ext.form.field.Checkbox
  */
Ext.define('Ext.ux.form.XCheckbox', {
	extend: 'Ext.form.field.Checkbox',

	alias: 'widget.xcheckbox',
 
	uncheckedValue:false,
	checkedValue  :true,

	initComponent: function() {

		var me = this;

        me.callParent(arguments);
        me.getManager().add(me);
    },

	onRender:function() {
		
		var me = this;
        me.callParent(arguments);

		me.hiddenField = me.getEl().insertFirst({tag:'input', type:'hidden'});
		
		me.hiddenField.dom.name = me.el.dom.name;
		
		me.el.dom.name = '';

		me.updateHidden();
	},

	setValue:function(v) {
		var me = this;
		me.callParent(arguments);
		me.updateHidden();
	},

	updateHidden:function(v) {

		var me = this;

		if(me.hiddenField) {
			me.hiddenField.dom.value = me.checked ? this.checkedValue : me.uncheckedValue;
		}
	}
});