module.exports = {
  name: 'nx-debug',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nx-debug',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
