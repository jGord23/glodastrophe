define(function(require) {

return {
  sidebar_home: 'Home',
  sidebar_accounts_label: 'Accounts',
  sidebar_folders_label: 'Folders',

  visualizations_adding_menu_root: 'Visualizations',
  visualizations_sidebar_menu_add_root: 'Add to Sidebar',


  // --- Account Home
  accountHomeShow3Col: '3-Column View',
  accountHomeShowFolders: 'Folders',

  show_account_contents: 'Show',

  /** Delete the current account then create it again */
  recreateAccount: 'Re-create Account',
  /** Delete the account permanently */
  deleteAccount: 'Delete Account',
  syncAccountFolderList: 'Sync Folder List',

  // --- Settings / Setup stuff
  /** Hyperlink text to navigate to the add an account page */
  settingsAccountAddLink: 'Add a new account…',

  // -- Card: autoconfig_setup.jsx
  /**
   * Header title for account setup via autoconfiguration given the display
   * name, email address, and password.
   */
  setupAutoconfigHeaderTitle: 'Add account',
  setupAutoconfigDisplayNamePlaceholder: 'Your name',
  setupAutoconfigEmailAddressPlaceholder: 'email@example.com',
  setupAutoconfigPasswordPlaceholder: 'password',
  /**
   * The button that actually starts the process of trying to automatically
   * configure the account.
   */
  setupAutoconfigTriggerAutoconfigButtonLabel: 'Add Account…',

  // -- folder_list.jsx
  refreshFolderList: 'Refresh folder list',

  // -- conversation list / sync stuff
  // The last sync label; I'm
  folderLastSyncLabel: 'Last sync:',

  toggle_sidebar: 'Menu',
  conversations_compose_menu_item: 'Compose',
  conversations_refresh_view_menu_item: 'Refresh',
  conversations_grow_view_menu_item: 'Fetch more conversations',

  filter_text_placeholder: 'Filter these messages…',
  filter_sender: 'Sender',
  filter_recipients: 'Recipients',
  filter_subject: 'Subject',
  filter_body: 'Body',

  // --- Conversation Summary Display
  convHasDrafts: 'Drafts',

  // --- Message Display

  messageDownloadEmbeddedImages: 'Download embedded images',

  // -- Message actions
  messageReply: 'Reply',
  messageForward: 'Forward',

  // -- Attachments
  /** The attachment is downloaded, try and view it. */
  attachmentView: 'View',
  /**
   * The attachment is currently being downloaded.  Probably would rather be a
   * spinner.
   */
  attachmentDownloading: 'Downloading',
  /** The attachment is not downloaded but can be downloaded. */
  attachmentDownload: 'Download',
  attachmentNoDownload: 'Not downloadable.',

  // -- compose / drafts
  composeSend: 'Send',
  composeAttach: 'Attach',
  composeSave: 'Save Draft',
  composeDiscard: 'Delete Draft',

  composeDirtyUnsaved: 'Unsaved changes!',
  composeCleanSaved: 'All changes saved.',

  composeLabelTo: 'To:',
  composeLabelCc: 'Cc:',
  composeLabelBcc: 'Bcc:',

  // -- Undo

  undoable_message_read: '{count} messages marked read',
  undoable_message_unread: '{count} messages marked unread',
  undoable_message_star: '{count} messages starred',
  undoable_message_unstar: '{count} messages un-starred',
  undoable_message_modifytags: '{count} messages had their tags changed',
  undoable_message_modifylabels: '{count} messages had their labels changed',
  undoable_message_move: '{count} messages moved',
  undoable_message_copy: '{count} messages copied',
  undoable_message_delete: '{count} mesages trashed',

  undoable_conversation_read: '{count} conversations marked read',
  undoable_conversation_unread: '{count} conversations marked unread',
  undoable_conversation_star: '{count} conversations starred',
  undoable_conversation_unstar: '{count} conversations un-starred',
  undoable_conversation_modifytags: '{count} conversations had their tags changed',
  undoable_conversation_modifylabels: '{count} conversations had their labels changed',
  undoable_conversation_move: '{count} conversations moved',
  undoable_conversation_copy: '{count} conversations copied',
  undoable_conversation_delete: '{count} mesages trashed',

  undoButton: 'Undo',

  // --- Debug
  // -- Home exposure
  debugHomeHeader: 'Debug Stuff',
  debugCronSync: 'Debug CronSync',

  // -- Debug: Cronsync
  forceCronSync: 'Force CronSync',
  forceFlushNew: 'Flush New',
  debugClearNewTracking: 'Clear New Tracking',

  // -- Debug: Undoable tracker
  debugUndoTrackerHeader: 'Recent Undoables:',
};

});
