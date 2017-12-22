import React from 'react'
import Grid from '../grid/'
import { populateGridStyle, calculateGap, WIDTHS } from './grid-classes'

describe('<Grid />', () => {
  describe('Populating styles for grid:', () => {

    const defaultStyle = {      
      width: 'calc(100% - 0px) !important'
    }

    describe('xl', () => {
      const style = {
        ...defaultStyle,        
        background: 'red',        
      }
      const columnSize = 12
      const gap = 0
      const gridStyle = populateGridStyle('xl', style, gap, columnSize)['$nest']
      const key = '@media (min-width: 1200px)'

      test('Checking media tag', () => {        
        expect(Object.keys(gridStyle)[0]).toBe(key)      
      })

      test('Checking style', () => {
        expect(gridStyle[key]).toEqual(style)
      })
      
      describe('classNames', () => {
        const defaultAlignStyles = { alignSelf: '', alignItems: '', justifyContent: '' }
        const grid = shallow(<Grid xl = {columnSize} style = {style}/>); 
        const updateClasses = grid.instance().updateClasses()

        test('Checking classNames for align styles', () => {         
          expect(updateClasses.alignStyles).toEqual(defaultAlignStyles)          
        })

        test('Checking classNames for styles', () => {         
          expect(grid.instance().updateClasses()['styles'].length).toBe(2)
        })        
      })
      
    })

    describe('lg-10 sm-5', () => {
      const columnSize = [10, 5]
      const style = [
        {
          ...defaultStyle,
          background: 'blue',        
          width: `${WIDTHS[columnSize[0]]} !important`
        },
        {
          ...defaultStyle,
          background: 'red',        
          width: `${WIDTHS[columnSize[1]]} !important`
        }
      ]      
      const gap = null
      const gridStyle = [
        populateGridStyle('lg', style[0], gap, columnSize[0])['$nest'],
        populateGridStyle('sm', style[1], gap, columnSize[1])['$nest']
      ]
      const key = [
        '@media (min-width: 992px) and (max-width: 1199px)',
        '@media (min-width: 576px) and (max-width: 767px)'
      ]

      test('Checking media tag for lg-10', () => {        
        expect(Object.keys(gridStyle[0])[0]).toBe(key[0])      
      })

      test('Checking style for lg-10', () => {                
        expect(gridStyle[0][key[0]]).toEqual(style[0])
      })
      
      test('Checking media tag for sm-5', () => {        
        expect(Object.keys(gridStyle[1])[0]).toBe(key[1])
      })

      test('Checking style for sm-5', () => {                
        expect(gridStyle[1][key[1]]).toEqual(style[1])
      })   
    }) 
    
    describe('md-5 gap: 5', () => {
      const columnSize = 5
      const gap = 5
      const style = {
        ...defaultStyle,
        background: 'yellow',
        marginBottom: gap,        
        width: `calc(${WIDTHS[columnSize]} - ${calculateGap(gap, columnSize)}px) !important`
      }          
      const gridStyle = populateGridStyle('md', style, gap, columnSize)['$nest']
      const key = '@media (min-width: 768px) and (max-width: 991px)'
  
      test('Checking media tag', () => {        
        expect(Object.keys(gridStyle)[0]).toBe(key)      
      })
  
      test('Checking style', () => {
        expect(gridStyle[key]).toEqual(style)
      })      
      describe('classNames', () => {
        // See ALIGN in ./grid-classes.tsx
        const alignStyles = { alignSelf: '', alignItems: 'flex-start', justifyContent: 'flex-start' } 
        const grid = shallow(<Grid xl = {columnSize} style = {style} alignItems='left'/>); 
        const updateClasses = grid.instance().updateClasses()

        test('Checking classNames for align styles', () => {         
          expect(updateClasses.alignStyles).toEqual(alignStyles)          
        })

        test('Checking classNames for styles', () => {         
          expect(grid.instance().updateClasses()['styles'].length).toBe(2)
        })        
      })
    })

    describe('sm-2.5 gap: 15', () => {
      const columnSize = 2.5
      const gap = 15
      const style = {
        ...defaultStyle,
        background: 'yellow',
        marginBottom: gap,        
        width: `calc(${WIDTHS[columnSize]} - ${calculateGap(gap, columnSize)}px) !important`
      }          
      const gridStyle = populateGridStyle('sm', style, gap, columnSize)['$nest']
      const key = '@media (min-width: 576px) and (max-width: 767px)'
  
      test('Checking media tag', () => {        
        expect(Object.keys(gridStyle)[0]).toBe(key)      
      })
  
      test('Checking style', () => {
        expect(gridStyle[key]).toEqual(style)
      })  
      
      describe('classNames', () => {
        // See ALIGN in ./grid-classes.tsx
        const alignStyles = { alignSelf: '', alignItems: 'flex-end', justifyContent: 'flex-start' } 
        const grid = shallow(<Grid xl = {columnSize} style = {style} alignItems={['left', 'bottom']}/>); 
        const updateClasses = grid.instance().updateClasses()

        test('Checking classNames for align styles', () => {         
          expect(updateClasses.alignStyles).toEqual(alignStyles)          
        })

        test('Checking classNames for styles', () => {         
          expect(grid.instance().updateClasses()['styles'].length).toBe(2)
        })        
      })
    })
    describe('no size gap: 55', () => {           
      test('No Params', () => {
        expect(() => {
          populateGridStyle()
        }) .toThrow()
      })      
    })
  })
})