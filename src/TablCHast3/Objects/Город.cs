﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.TablCHast3
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Город.
    /// </summary>
    // *** Start programmer edit section *** (Город CustomAttributes)

    // *** End programmer edit section *** (Город CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ГородE", new string[] {
            "Назв as \'Название\'",
            "Улица as \'Улица\'",
            "Улица.Назв as \'Улица\'"})]
    [View("ГородL", new string[] {
            "Улица.Назв as \'Улица\'"})]
    public class Город : ICSSoft.STORMNET.DataObject
    {
        
        private string fНазв;
        
        private IIS.TablCHast3.Улица fУлица;
        
        private IIS.TablCHast3.Препод fПрепод;
        
        // *** Start programmer edit section *** (Город CustomMembers)

        // *** End programmer edit section *** (Город CustomMembers)

        
        /// <summary>
        /// Назв.
        /// </summary>
        // *** Start programmer edit section *** (Город.Назв CustomAttributes)

        // *** End programmer edit section *** (Город.Назв CustomAttributes)
        [StrLen(255)]
        public virtual string Назв
        {
            get
            {
                // *** Start programmer edit section *** (Город.Назв Get start)

                // *** End programmer edit section *** (Город.Назв Get start)
                string result = this.fНазв;
                // *** Start programmer edit section *** (Город.Назв Get end)

                // *** End programmer edit section *** (Город.Назв Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Город.Назв Set start)

                // *** End programmer edit section *** (Город.Назв Set start)
                this.fНазв = value;
                // *** Start programmer edit section *** (Город.Назв Set end)

                // *** End programmer edit section *** (Город.Назв Set end)
            }
        }
        
        /// <summary>
        /// Город.
        /// </summary>
        // *** Start programmer edit section *** (Город.Улица CustomAttributes)

        // *** End programmer edit section *** (Город.Улица CustomAttributes)
        [PropertyStorage(new string[] {
                "Улица"})]
        [NotNull()]
        public virtual IIS.TablCHast3.Улица Улица
        {
            get
            {
                // *** Start programmer edit section *** (Город.Улица Get start)

                // *** End programmer edit section *** (Город.Улица Get start)
                IIS.TablCHast3.Улица result = this.fУлица;
                // *** Start programmer edit section *** (Город.Улица Get end)

                // *** End programmer edit section *** (Город.Улица Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Город.Улица Set start)

                // *** End programmer edit section *** (Город.Улица Set start)
                this.fУлица = value;
                // *** Start programmer edit section *** (Город.Улица Set end)

                // *** End programmer edit section *** (Город.Улица Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.TablCHast3.Препод.
        /// </summary>
        // *** Start programmer edit section *** (Город.Препод CustomAttributes)

        // *** End programmer edit section *** (Город.Препод CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Препод"})]
        public virtual IIS.TablCHast3.Препод Препод
        {
            get
            {
                // *** Start programmer edit section *** (Город.Препод Get start)

                // *** End programmer edit section *** (Город.Препод Get start)
                IIS.TablCHast3.Препод result = this.fПрепод;
                // *** Start programmer edit section *** (Город.Препод Get end)

                // *** End programmer edit section *** (Город.Препод Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Город.Препод Set start)

                // *** End programmer edit section *** (Город.Препод Set start)
                this.fПрепод = value;
                // *** Start programmer edit section *** (Город.Препод Set end)

                // *** End programmer edit section *** (Город.Препод Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ГородE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ГородE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ГородE", typeof(IIS.TablCHast3.Город));
                }
            }
            
            /// <summary>
            /// "ГородL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ГородL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ГородL", typeof(IIS.TablCHast3.Город));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Город.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfГород CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfГород CustomAttributes)
    public class DetailArrayOfГород : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.TablCHast3.DetailArrayOfГород members)

        // *** End programmer edit section *** (IIS.TablCHast3.DetailArrayOfГород members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Город by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Город.
        /// </summary>
        public DetailArrayOfГород(IIS.TablCHast3.Препод fПрепод) : 
                base(typeof(Город), ((ICSSoft.STORMNET.DataObject)(fПрепод)))
        {
        }
        
        public IIS.TablCHast3.Город this[int index]
        {
            get
            {
                return ((IIS.TablCHast3.Город)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.TablCHast3.Город dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
