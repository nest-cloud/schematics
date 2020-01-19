import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import { ApplicationOptions } from './application.schema';

describe('Application Factory', () => {
  const runner: SchematicTestRunner = new SchematicTestRunner(
    '.',
    path.join(process.cwd(), 'src/collection.json'),
  );
  it('should manage name only', () => {
    const options: ApplicationOptions = { name: 'project' };
    const tree: UnitTestTree = runner.runSchematic('application', options);
    const files: string[] = tree.files;
    expect(files).toEqual([
      '/project/.gitignore',
      '/project/.prettierrc',
      '/project/README.md',
      '/project/nest-cli.json',
      '/project/package.json',
      '/project/tsconfig.build.json',
      '/project/tsconfig.json',
      '/project/tslint.json',
      '/project/src/app.controller.spec.ts',
      '/project/src/app.controller.ts',
      '/project/src/app.module.ts',
      '/project/src/app.service.ts',
      '/project/src/main.ts',
      '/project/test/app.e2e-spec.ts',
      '/project/test/jest-e2e.json',
    ]);
  });
  it('should manage name to dasherize', () => {
    const options: ApplicationOptions = { name: 'awesomeProject' };
    const tree: UnitTestTree = runner.runSchematic('application', options);
    const files: string[] = tree.files;
    expect(files).toEqual([
      '/awesome-project/.gitignore',
      '/awesome-project/.prettierrc',
      '/awesome-project/README.md',
      '/awesome-project/nest-cli.json',
      '/awesome-project/package.json',
      '/awesome-project/tsconfig.build.json',
      '/awesome-project/tsconfig.json',
      '/awesome-project/tslint.json',
      '/awesome-project/src/app.controller.spec.ts',
      '/awesome-project/src/app.controller.ts',
      '/awesome-project/src/app.module.ts',
      '/awesome-project/src/app.service.ts',
      '/awesome-project/src/main.ts',
      '/awesome-project/test/app.e2e-spec.ts',
      '/awesome-project/test/jest-e2e.json',
    ]);
  });
  it('should manage destination directory', () => {
    const options: ApplicationOptions = {
      name: '@scope/package',
      directory: 'scope-package',
    };
    const tree: UnitTestTree = runner.runSchematic('application', options);
    const files: string[] = tree.files;
    expect(files).toEqual([
      '/scope-package/.gitignore',
      '/scope-package/.prettierrc',
      '/scope-package/README.md',
      '/scope-package/nest-cli.json',
      '/scope-package/package.json',
      '/scope-package/tsconfig.build.json',
      '/scope-package/tsconfig.json',
      '/scope-package/tslint.json',
      '/scope-package/src/app.controller.spec.ts',
      '/scope-package/src/app.controller.ts',
      '/scope-package/src/app.module.ts',
      '/scope-package/src/app.service.ts',
      '/scope-package/src/main.ts',
      '/scope-package/test/app.e2e-spec.ts',
      '/scope-package/test/jest-e2e.json',
    ]);
  });
});
