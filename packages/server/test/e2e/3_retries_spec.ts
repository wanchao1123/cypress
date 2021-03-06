import e2e from '../support/helpers/e2e'
import Fixtures from '../support/helpers/fixtures'

const it = e2e.it

describe('retries', () => {
  e2e.setup()

  it('supports retries', {
    project: Fixtures.projectPath('retries-2'),
    spec: 'fail-twice.js',
    snapshot: true,
  })

  it('completes a run of many retries in a reasonable time', {
    spec: 'hanging_retries_spec.js',
    expectedExitCode: 10,
  })

  it('warns about retries plugin', {
    project: Fixtures.projectPath('plugin-retries'),
    spec: 'main.spec.js',
    stubPackage: 'cypress-plugin-retries',
    snapshot: true,
  })
})
