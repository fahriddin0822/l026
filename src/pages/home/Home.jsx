import Brands from '@/components/brands/Brands'
import Hero from '@/components/hero/Hero'
import Products from '@/components/products/Products'
import { useFetch } from '@/hooks/useFetch'
import React from 'react'
import Category from '../../components/category/Category'
import Collection from '../../components/collection/Collection'
import HotSells from '../../components/hot__sells/HotSells'
import LowPrices from '../../components/low__prices/LowPrices'
import Articles from '../../components/articles/Articles'

const Home = () => {
  const {data,error,loading} = useFetch("/product/get")
  const {data: categories} = useFetch("/product-category/get")
  return (
    <div>
      <Hero/>
      <Brands/>
      <Products isAdmin={false} data={data}/>
      <Category data={categories}/>
      <Collection/>
      <HotSells isAdmin={false} data={data}/>
      <LowPrices/>
      <Articles/>
    </div>
  )
}

export default Home