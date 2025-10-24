import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import AutoComplete from '../components/Form/AutoComplete'
import * as deps from '../api/departments'
import { vi } from 'vitest'

test('autocomplete calls fetch function', async () => {
  const spy = vi.spyOn(deps, 'fetchDepartments').mockResolvedValue([{id:1,name:'Engineering'}])
  render(<AutoComplete label="Dept" fetchFn={deps.fetchDepartments} value="" onChange={()=>{}} />)
  const input = screen.getByLabelText('Dept')
  fireEvent.change(input, { target: { value: 'Eng' }})
  await waitFor(() => expect(spy).toHaveBeenCalled())
  spy.mockRestore()
})
