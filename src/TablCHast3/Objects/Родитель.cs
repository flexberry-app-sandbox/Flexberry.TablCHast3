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
    /// Родитель.
    /// </summary>
    // *** Start programmer edit section *** (Родитель CustomAttributes)

    // *** End programmer edit section *** (Родитель CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("РодительE", new string[] {
            "ФИО as \'ФИО\'",
            "Возвраст as \'Возвраст\'"})]
    public class Родитель : ICSSoft.STORMNET.DataObject
    {
        
        private string fФИО;
        
        private int fВозвраст;
        
        private IIS.TablCHast3.Ученик fУченик;
        
        // *** Start programmer edit section *** (Родитель CustomMembers)

        // *** End programmer edit section *** (Родитель CustomMembers)

        
        /// <summary>
        /// Возвраст.
        /// </summary>
        // *** Start programmer edit section *** (Родитель.Возвраст CustomAttributes)

        // *** End programmer edit section *** (Родитель.Возвраст CustomAttributes)
        public virtual int Возвраст
        {
            get
            {
                // *** Start programmer edit section *** (Родитель.Возвраст Get start)

                // *** End programmer edit section *** (Родитель.Возвраст Get start)
                int result = this.fВозвраст;
                // *** Start programmer edit section *** (Родитель.Возвраст Get end)

                // *** End programmer edit section *** (Родитель.Возвраст Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Родитель.Возвраст Set start)

                // *** End programmer edit section *** (Родитель.Возвраст Set start)
                this.fВозвраст = value;
                // *** Start programmer edit section *** (Родитель.Возвраст Set end)

                // *** End programmer edit section *** (Родитель.Возвраст Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Родитель.ФИО CustomAttributes)

        // *** End programmer edit section *** (Родитель.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Родитель.ФИО Get start)

                // *** End programmer edit section *** (Родитель.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Родитель.ФИО Get end)

                // *** End programmer edit section *** (Родитель.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Родитель.ФИО Set start)

                // *** End programmer edit section *** (Родитель.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Родитель.ФИО Set end)

                // *** End programmer edit section *** (Родитель.ФИО Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.TablCHast3.Ученик.
        /// </summary>
        // *** Start programmer edit section *** (Родитель.Ученик CustomAttributes)

        // *** End programmer edit section *** (Родитель.Ученик CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Ученик"})]
        public virtual IIS.TablCHast3.Ученик Ученик
        {
            get
            {
                // *** Start programmer edit section *** (Родитель.Ученик Get start)

                // *** End programmer edit section *** (Родитель.Ученик Get start)
                IIS.TablCHast3.Ученик result = this.fУченик;
                // *** Start programmer edit section *** (Родитель.Ученик Get end)

                // *** End programmer edit section *** (Родитель.Ученик Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Родитель.Ученик Set start)

                // *** End programmer edit section *** (Родитель.Ученик Set start)
                this.fУченик = value;
                // *** Start programmer edit section *** (Родитель.Ученик Set end)

                // *** End programmer edit section *** (Родитель.Ученик Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "РодительE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РодительE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РодительE", typeof(IIS.TablCHast3.Родитель));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Родитель.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfРодитель CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfРодитель CustomAttributes)
    public class DetailArrayOfРодитель : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.TablCHast3.DetailArrayOfРодитель members)

        // *** End programmer edit section *** (IIS.TablCHast3.DetailArrayOfРодитель members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Родитель by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Родитель.
        /// </summary>
        public DetailArrayOfРодитель(IIS.TablCHast3.Ученик fУченик) : 
                base(typeof(Родитель), ((ICSSoft.STORMNET.DataObject)(fУченик)))
        {
        }
        
        public IIS.TablCHast3.Родитель this[int index]
        {
            get
            {
                return ((IIS.TablCHast3.Родитель)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.TablCHast3.Родитель dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
