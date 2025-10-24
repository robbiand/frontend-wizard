/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi } from 'vitest'
import { postBasicInfo, postDetails } from './../src/api/employees'

describe('submit flow simulation', () => {
  it('runs sequential posts', async () => {
    const spyB = vi.spyOn(global, 'fetch')
      .mockResolvedValue({ ok:true, json: async ()=>({}) } as any)
    
    await postBasicInfo({foo:1})
    await postDetails({foo:2})
    
    expect(spyB).toHaveBeenCalled()
    spyB.mockRestore()
  })
})
