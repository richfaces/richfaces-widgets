/* global CKEDITOR */

/*
 * Disables automatic enhancement of all contanteditable areas to avoid conflicts.
 */
CKEDITOR.disableAutoInline = true;

/*
 * Provides default configuration for all editor instances.
 */
CKEDITOR.editorConfig = function( config ) {

  // makes Basic toolbar the default
  config['toolbar'] = 'Basic';

  // overrides default Basic toolbar button set
  config['toolbar_Basic'] = [
    ['Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink']
  ];

  // overrides default Full toolbar button set
  config['toolbar_Full'] = [
    { name: 'document',   items : [ 'Source','-','Save','NewPage','DocProps','Preview','Print','-','Templates' ] },
    { name: 'clipboard',  items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
    { name: 'editing',    items : [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ] },
    { name: 'forms',    items : [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },
    '/',
    { name: 'basicstyles',  items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] },
    { name: 'paragraph',  items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ] },
    { name: 'links',    items : [ 'Link','Unlink','Anchor' ] },
    { name: 'insert',   items : [ 'Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak','Iframe' ] },
    '/',
    { name: 'styles',   items : [ 'Styles','Format','Font','FontSize' ] },
    { name: 'colors',   items : [ 'TextColor','BGColor' ] },
    { name: 'tools',    items : [ 'Maximize', 'ShowBlocks'] }
  ];
};