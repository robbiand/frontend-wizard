import React from 'react'
import { expect, test, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import AutoComplete from './../src/components/Form/AutoComplete'
import * as deps from './../src/api/departments.ts'

test('autocomplete calls fetch function', async () => {
  const spy = vi.spyOn(deps, 'fetchDepartments').mockResolvedValue([{id:1,name:'Engineering'}])
  
  render(
    <AutoComplete label="Dept" fetchFn={deps.fetchDepartments} value="" onChange={()=>{}} />
  )
  
  const input = screen.getByLabelText('Dept')
  
  fireEvent.change(input, { target: { value: 'Eng' }})
  
  await waitFor(() => expect(spy).toHaveBeenCalled())
  
  spy.mockRestore()
})
