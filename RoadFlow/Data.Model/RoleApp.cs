using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Data.Model
{
    [Serializable]
    public class RoleApp
    {
        /// <summary>
        /// ID
        /// </summary>
        [DisplayName("ID")]
        public Guid ID { get; set; }

        /// <summary>
        /// �ϼ�ID
        /// </summary>
        [DisplayName("�ϼ�ID")]
        public Guid ParentID { get; set; }

        /// <summary>
        /// ��ɫID
        /// </summary>
        [DisplayName("��ɫID")]
        public Guid RoleID { get; set; }

        /// <summary>
        /// Ӧ��ID
        /// </summary>
        [DisplayName("Ӧ��ID")]
        public Guid? AppID { get; set; }

        /// <summary>
        /// ��ʾ����
        /// </summary>
        [DisplayName("��ʾ����")]
        public string Title { get; set; }

        /// <summary>
        /// ��ز���
        /// </summary>
        [DisplayName("��ز���")]
        public string Params { get; set; }

        /// <summary>
        /// ��ʾ˳��
        /// </summary>
        [DisplayName("��ʾ˳��")]
        public int Sort { get; set; }

        /// <summary>
        /// Ӧ��ͼ��
        /// </summary>
        [DisplayName("Ӧ��ͼ��")]
        public string Ico { get; set; }

        /// <summary>
        /// 0:ģ��Ӧ�� 1:����Ӧ��
        /// </summary>
        [DisplayName("0:ģ��Ӧ�� 1:����Ӧ��")]
        public int Type { get; set; }

    }
}
