import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://biymwbpruwfcuttwshnv.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpeW13YnBydXdmY3V0dHdzaG52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MzY4ODEsImV4cCI6MjA2MTAxMjg4MX0.UcKXzUe6Nw-jCB-eSiI8btT-UtETboQlbTr1ao5JH5M'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
