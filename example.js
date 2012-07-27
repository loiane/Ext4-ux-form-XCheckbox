Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', 'ux');
Ext.require([
	'Ext.form.field.Checkbox',
	'Ext.ux.form.XCheckbox'
]);

Ext.onReady(function() {
	Ext.create('Ext.form.Panel', {
	   	bodyPadding: 10,
	    width: 300,
	    title: 'Pizza Order',
	    items: [
	        {
	            xtype: 'fieldcontainer',
	            fieldLabel: 'Toppings',
	            defaultType: 'xcheckbox',
	            items: [
	                {
	                    boxLabel  : 'Anchovies',
	                    name      : 'topping1',
	                    inputValue: true
	                }, {
	                    boxLabel  : 'Artichoke Hearts',
	                    name      : 'topping2',
	                    checked   : true,
	                    inputValue: true
	                }, {
	                    boxLabel  : 'Bacon',
	                    name      : 'topping3',
	                    inputValue: true
	                }
	            ]
	        }
	    ],
	    buttons: [{
	        text: 'Send',
	        handler: function() {
	        	console.log(this.up('form'));
	        	Ext.MessageBox.alert('Send', this.up('form').getForm().getValues(true));
	        }
	    }],
	    renderTo: Ext.getBody()
	});
});