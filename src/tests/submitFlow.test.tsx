import { describe, it, expect, vi } from 'vitest'
import { postBasicInfo, postDetails } from '../api/employees'

describe('submit flow simulation', () => {
  it('runs sequential posts', async () => {
    const spyB = vi.spyOn(global, 'fetch').mockResolvedValue({ ok:true, json: async ()=>({}) } as any)
    const p1 = await postBasicInfo({foo:1})
    const p2 = await postDetails({foo:2})
    expect(spyB).toHaveBeenCalled()
    spyB.mockRestore()
  })
})
